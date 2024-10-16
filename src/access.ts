/**
 * 权限相关
 * @param initialState
 * @returns
 */
export default function (initialState) {
  return {
    // 页面
    canSeeAdmin: true,
    // 首页
    showHome: true,
    // 简介
    showSummary: true,
    showSummaryFn: (visible) => {
      return visible;
    },
  };
}
