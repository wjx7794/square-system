import { PageContainer } from '@ant-design/pro-components';
import { Access, useAccess, useModel } from '@umijs/max';
import { Button } from 'antd';

const Summary: React.FC = () => {
  const access = useAccess();
  // [全局数据] modal
  const { count, increment } = useModel('global');

  console.log('🍎access =>', access);

  return (
    <PageContainer
      ghost
      header={{
        title: '简介',
      }}
    >
      <Access accessible={access.canSeeAdmin}>
        <Button>Summary</Button>
        <Access
          accessible={access.showSummary}
          fallback={<div>Can not read content.</div>}
        >
          content
        </Access>
        {/* 全局数据 */}
        <Button onClick={increment} style={{ marginLeft: 10 }}>
          {count}
        </Button>
      </Access>
    </PageContainer>
  );
};

export default Summary;
