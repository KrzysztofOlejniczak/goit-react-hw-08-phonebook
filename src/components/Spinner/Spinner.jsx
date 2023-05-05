import { SyncLoader } from 'react-spinners';

const spinnerStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const backdropStyle = {
  position: 'fixed',
  width: '100%',
  left: '0',
  right: '0',
  top: '0',
  bottom: '0',
  backgroundColor: 'rgba(255,255,255,0.7)',
  zIndex: 9999,
};

export const Spinner = () => {
  return (
    <div style={backdropStyle}>
      <div style={spinnerStyle}>
        <SyncLoader color="#4ecdff" />
      </div>
    </div>
  );
};
