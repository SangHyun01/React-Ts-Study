import { useTheme } from '../context/useTheme';

const ThemeToggleButton = () => {
  const { state, actions } = useTheme();

  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: state.mode === 'light' ? '#f0f0f0' : '#333',
      color: state.mode === 'light' ? '#000000' : '#fff',
      borderRadius: '8px',
      transition: 'all 0.3s ease'
    }}>
      <h2>테마 전환 예제</h2>
      <button 
        onClick={actions.toggleTheme}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: state.mode === 'light' ? '#FFFFFF' : '#000000',
          color: state.mode === 'light' ? 'black' : 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease'
        }}
      >
        {state.mode === 'light' ? '🌙 다크 모드로 전환' : '☀️ 라이트 모드로 전환'}
      </button>
      <p></p>
      <p>현재 테마: {state.mode === 'light' ? '라이트' : '다크'}</p>
    </div>
  );
};

export default ThemeToggleButton;