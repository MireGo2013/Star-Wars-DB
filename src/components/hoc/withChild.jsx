export const withChild = (WrapperComponent, childFn) => {
  return (props) => {
    return <WrapperComponent {...props}>{childFn}</WrapperComponent>;
  };
};
