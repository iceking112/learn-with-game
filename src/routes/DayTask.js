import React from 'react';
import { connect } from 'dva';
import styles from './DayTask.css';
import { Calendar } from 'antd';
import TaskCard from 'components/DayTask/TaskCard'

function DayTask() {
  const onSelect = (date) => {
    console.log(date);
  }

  return (
    <div className={styles.normal}>
      <div style={{ width: 290, border: '1px solid #d9d9d9', borderRadius: 4 }}>
        <Calendar fullscreen={false} onSelect={onSelect} />
        <TaskCard title="重要且紧急"></TaskCard>
      </div>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(DayTask);
