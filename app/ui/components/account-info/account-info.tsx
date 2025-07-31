'use client';

import { useState } from 'react';
import { DocumentDuplicateIcon, EyeIcon, EyeSlashIcon, IdentificationIcon, UserCircleIcon } from '@heroicons/react/24/outline';

interface AccountInfoProps {
  userName?: string;
  accountId?: string | null;
  balance?: number;
}

export function AccountInfo({ userName, accountId, balance }: AccountInfoProps) {
  const [showValues, setShowValues] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const toggleVisibility = () => setShowValues(!showValues);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const formatBalance = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value / 100);
  };

  const shortAccountId = accountId ? `${accountId.substring(0, 8)}...` : 'Não disponível';

  const accountContent = (
    <>
      <div className="flex items-center gap-1">
        <span className="text-sm font-medium">Conta:</span>
        <span className="text-sm">
          {shortAccountId || 'Não disponível'}
        </span>
        {accountId && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigator.clipboard.writeText(accountId);
            }}
            className="p-1 text-gray-300 hover:text-white"
            aria-label="Copiar número da conta"
            title="Copiar número da conta"
          >
            <DocumentDuplicateIcon className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className="flex items-center gap-1">
        <span className="text-sm font-medium">Saldo:</span>
        {balance !== undefined ? (
          <span className={`text-sm ${balance < 0 ? 'text-red-300' : ''}`}>
            {showValues ? formatBalance(balance) : '••••••'}
          </span>
        ) : (
          <span className="text-sm">N/A</span>
        )}
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleVisibility();
        }}
        className="p-1 text-gray-300 hover:text-white"
        aria-label={showValues ? 'Ocultar saldo' : 'Mostrar saldo'}
      >
        {showValues ? (
          <EyeSlashIcon className="h-5 w-5" />
        ) : (
          <EyeIcon className="h-5 w-5" />
        )}
      </button>
    </>
  );

  return (
    <>
      <div className="hidden md:flex flex-row items-center space-x-2 gap-4 text-secondary">
        {userName && <b>{userName}</b>}
        <div className="flex items-center gap-4 text-white">
          {accountContent}
        </div>
      </div>

      <div className="md:hidden flex items-center">
        <button 
          onClick={handleOpenModal}
          className="text-white p-2 hover:bg-gray-700 rounded-full"
        >
          <IdentificationIcon className="h-10 w-10 text-secondary hover:text-gray-900"  />
        </button>
      </div>

      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg max-w-sm w-full mx-4">
            <div className="p-4 border-b border-gray-700">
              <h3 className="text-lg font-bold text-white">Informações da Conta</h3>
            </div>
            <div className="p-4">
              {userName && <p className="text-white font-medium mb-3">{userName}</p>}
              <div className="flex flex-col gap-3 text-white">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Conta:</span>
                  <span className="text-sm">
                    {shortAccountId}
                  </span>
                  {accountId && (
                    <button
                      onClick={() => navigator.clipboard.writeText(accountId)}
                      className="p-1 text-gray-300 hover:text-white"
                    >
                      <DocumentDuplicateIcon className="h-4 w-4" />
                    </button>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Saldo:</span>
                  {balance !== undefined ? (
                    <span className={`text-sm ${balance < 0 ? 'text-red-300' : ''}`}>
                      {showValues ? formatBalance(balance) : '••••••'}
                    </span>
                  ) : (
                    <span className="text-sm">N/A</span>
                  )}
                  <button
                    onClick={toggleVisibility}
                    className="p-1 text-gray-300 hover:text-white"
                  >
                    {showValues ? (
                      <EyeSlashIcon className="h-5 w-5" />
                    ) : (
                      <EyeIcon className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-gray-700 flex justify-end">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-white"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}