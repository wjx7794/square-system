import { PageContainer } from '@ant-design/pro-components';
import { Access, useAccess } from '@umijs/max';
import { Button } from 'antd';

const Introduction: React.FC = () => {
  const access = useAccess();
  return (
    <PageContainer
      ghost
      header={{
        title: '关于我',
      }}
    >
      <Access accessible={access.canSeeAdmin}>
        <Button>Introduction</Button>
      </Access>
    </PageContainer>
  );
};

export default Introduction;
