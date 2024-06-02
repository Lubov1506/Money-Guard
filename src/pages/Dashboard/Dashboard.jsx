import { Outlet } from 'react-router-dom';
import s from './Dashboard.module.css';
import { Suspense, useState } from 'react';
import { useMedia } from '../../hooks/useMedia';
import {
  Balance,
  Currency,
  Header,
  MoneyLoader,
  Navigation,
} from '../../components';
import ModalAddTransactionNew from '../../components/ModalAddTransaction/ModalAddTransaction';
import ModalEditTransaction from '../../components/ModalEditTransaction/ModalEditTransaction';
import EditModal from '../../components/EditModal/EditModal';

const Dashboard = () => {
  const { isDesktop, isTablet } = useMedia();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isEditedTrn, setIsEditedTrn] = useState(null)
  const openAddModal = () => setIsAddModalOpen(true);
  const openEditModal = (item) => setIsEditModalOpen(true, setIsEditedTrn(item));
  const closeAddModal = () => setIsAddModalOpen(false);
  const closeEditModal = () => setIsEditModalOpen(false);


  return (
    <>
      {isAddModalOpen && <ModalAddTransactionNew closeModal={closeAddModal} />}
      {isEditModalOpen && <EditModal closeModal={closeEditModal} item={ isEditedTrn} />}

      <Header />
      <div className={s.divBackground}>
        {isDesktop ? (
          <>
            <div className={s.noOutletWrapper}>
              <Navigation />
              <Balance />
              <Currency />
            </div>
          </>
        ) : isTablet ? (
          <>
            <div className={s.noOutletWrapper}>
              <div className={s.navBalWrapper}>
                <Navigation />
                <Balance />
              </div>
              <Currency />
            </div>
          </>
        ) : (
          <>
            <Navigation />
            <Balance />
          </>
        )}
        <Suspense fallback={<MoneyLoader />}>
          <Outlet
            context={{
              openAddModal,
             openEditModal
            }}
          />
        </Suspense>
      </div>
    </>
  );
};

export default Dashboard;
