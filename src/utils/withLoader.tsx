interface WithLoaderProps {
  isLoading?: boolean;
}

export default function withLoader(Component: React.ComponentType) {
  return function WithLoaderComponent(props: WithLoaderProps) {
    const { isLoading, ...componentProps } = props;

    return (
      <>
        {isLoading ? <div>Loading...</div> : <Component {...componentProps} />}
      </>
    );
  };
}
