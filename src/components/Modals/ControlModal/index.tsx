// 라이브러리
import React, { useRef, useEffect } from 'react';

// 파일
import * as _ from './style';
import EditSquare from 'assets/Icon/EditSquare';
import TrashCan from 'assets/Icon/TrashCan';
import Share from 'assets/Icon/Share';
import { useNavigate, useParams } from 'react-router-dom';
import { Plan_Delete } from 'lib/apis/Plan';
import { useMutation } from 'react-query';

interface ControlModalProps {
  onClose: () => void;
  setIsUpdated: React.Dispatch<React.SetStateAction<boolean>>;
}

const ControlModal = ({ onClose, setIsUpdated }: ControlModalProps) => {
  const navigate = useNavigate();
  const id = useParams().id;
  const modalRef = useRef<HTMLDivElement>(null);

  const { mutate: deletePlan } = useMutation(() => Plan_Delete(id!), {
    onSuccess: (response) => {
      alert(response.message);
      navigate('/');
    },
    onError: (error) => {
      console.error('일정 삭제 실패', error);
    }
  });

  const handleUpdatePlan = () => {
    setIsUpdated(true);
    onClose();
  };

  const handleDeletePlan = () => {
    if (confirm('일정을 삭제하시겠습니까?')) {
      deletePlan();
    }
  };

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
    <_.ControlModal_Layout ref={modalRef} onClick={handleUpdatePlan}>
      <_.ControlModal_Menu>
        수정하기
        <EditSquare />
      </_.ControlModal_Menu>
      <_.ControlModal_Menu onClick={handleDeletePlan}>
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
