import { Outlet } from 'react-router-dom';
import s from './Dashboard.module.css';
import { Suspense, useState } from 'react';
import { useMedia } from 'hooks';
import {
  Balance,
  Currency,
  EditModal,
  Header,
  ModalAddTransactionNew,
  MoneyLoader,
  Navigation,
} from 'components';

const Dashboard = () => {
  const { isDesktop, isTablet } = useMedia();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isEditedTrn, setIsEditedTrn] = useState(null);
  const openAddModal = () => setIsAddModalOpen(true);
  const openEditModal = item => setIsEditModalOpen(true, setIsEditedTrn(item));
  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };
  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <>
      {isAddModalOpen && <ModalAddTransactionNew closeModal={closeAddModal} />}
      {isEditModalOpen && (
        <EditModal closeModal={closeEditModal} item={isEditedTrn} />
      )}

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
            <div className={s.noOutletWrapper}>
              <Navigation />
              <Balance />
            </div>
          </>
        )}
        <Suspense fallback={<MoneyLoader />}>
          <Outlet
            context={{
              openAddModal,
              openEditModal,
            }}
          />
        </Suspense>
      </div>
    </>
  );
};

export default Dashboard;
