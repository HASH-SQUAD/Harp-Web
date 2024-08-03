// 라이브러리
import React, { useRef, useEffect } from 'react';

// 파일
import * as _ from './style';
import EditSquare from 'assets/Icon/EditSquare';
import TrashCan from 'assets/Icon/TrashCan';
import Share from 'assets/Icon/Share';

interface ControlModalProps {
  onClose: () => void;
}

const ControlModal = ({ onClose }: ControlModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <_.ControlModal_Layout ref={modalRef}>
      <_.ControlModal_Menu>
        수정하기
        <EditSquare />
      </_.ControlModal_Menu>
      <_.ControlModal_Menu>
        삭제하기
        <TrashCan />
      </_.ControlModal_Menu>
      <_.ControlModal_Menu>
        공유하기
        <Share />
      </_.ControlModal_Menu>
    </_.ControlModal_Layout>
  );
};

export default ControlModal;
