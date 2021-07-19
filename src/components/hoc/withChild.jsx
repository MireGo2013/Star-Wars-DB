export const withChild = (childFn) => (WrapperComponent) => {
  return (props) => {
    return <WrapperComponent {...props}>{childFn}</WrapperComponent>;
  };
};
