// import styles from '../../pages/Setting.module.css';

import styles from './TimeSettingGroup.module.css';

function TimeSettingGroup({
  studyHour,
  studyMinute,
  breakHour,
  breakMinute,
  cycleCount,
  setStudyHour,
  setStudyMinute,
  setBreakHour,
  setBreakMinute,
  setCycleCount,
}) {
  const hourOptions = Array.from({ length: 12 }, (_, i) => i);
  const minuteOptions = [0, 10, 20, 30, 40, 50];

  return (
    <div className={styles.settingGroup}>
      <label>공부 시간</label>
      <div className={styles.dropdownGroup}>
        <select value={studyHour} onChange={(e) => setStudyHour(Number(e.target.value))}>
          {hourOptions.map((h) => (
            <option key={h} value={h}>{h}시간</option>
          ))}
        </select>
        <select value={studyMinute} onChange={(e) => setStudyMinute(Number(e.target.value))}>
          {minuteOptions.map((m) => (
            <option key={m} value={m}>{m}분</option>
          ))}
        </select>
      </div>

      <label>쉬는 시간</label>
      <div className={styles.dropdownGroup}>
        <select value={breakHour} onChange={(e) => setBreakHour(Number(e.target.value))}>
          {hourOptions.map((h) => (
            <option key={h} value={h}>{h}시간</option>
          ))}
        </select>
        <select value={breakMinute} onChange={(e) => setBreakMinute(Number(e.target.value))}>
          {minuteOptions.map((m) => (
            <option key={m} value={m}>{m}분</option>
          ))}
        </select>
      </div>

      <label>사이클 반복 횟수</label>
      <div className={styles.dropdownGroup}>
        <input
          type="number"
          value={cycleCount}
          onChange={(e) => setCycleCount(Number(e.target.value))}
        />
      </div>
    </div>
  );
}

export default TimeSettingGroup;
