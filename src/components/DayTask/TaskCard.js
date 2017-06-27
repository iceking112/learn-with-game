import React from 'react';
import styles from './TaskCard.less';
import { Card, Checkbox } from 'antd';

function TaskCard({title, taskList, onChange}) {
  return (
    <div className={styles.normal}>
      <Card title={title} extra={<a href="#">添加</a>} style={{ width: 300 }}>
        <Checkbox className={styles.taskList} onChange={onChange}>Checkbox</Checkbox>
        <Checkbox className={styles.taskList} onChange={onChange}>Checkbox</Checkbox>
        <Checkbox className={styles.taskList} onChange={onChange}>Checkbox</Checkbox>
      </Card>
    </div>
  );
}

export default TaskCard;
