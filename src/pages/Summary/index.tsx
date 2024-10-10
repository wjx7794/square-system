import { PageContainer } from '@ant-design/pro-components';
import { Access, useAccess } from '@umijs/max';
import { Button } from 'antd';

const Summary: React.FC = () => {
  const access = useAccess();
  return (
    <PageContainer
      ghost
      header={{
        title: '简介',
      }}
    >
      <Access accessible={access.canSeeAdmin}>
        <Button>Summary</Button>
      </Access>
    </PageContainer>
  );
};

export default Summary;
