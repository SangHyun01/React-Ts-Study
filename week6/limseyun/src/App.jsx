import ThemeProvider from './context/ThemeContext';
import ThemeToggleButton from './components/ThemeToggleButton';
import { useTheme } from './context/useTheme';

// 테마가 적용된 메인 앱 컴포넌트
const ThemedApp = () => {
  const { state } = useTheme();
  
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: state.mode === 'light' ? '#ffffff' : '#1a1a1a',
      color: state.mode === 'light' ? '#333333' : '#ffffff',
      transition: 'all 0.3s ease',
      padding: '20px'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
        Context API + useReducer 테마 전환 예제
      </h1>
      <ThemeToggleButton />
    </div>
  );
};

// 앱의 루트 컴포넌트
function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

export default App;