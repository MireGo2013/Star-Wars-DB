import { ConsumerSwapiService } from "../swapi-service-context";
import ErrorBoundary from "../ErrorBoundary";

export const withConsumerSwapiService =
  (mapPropsSwapiFn) => (WrapperComponent) => {
    return (props) => {
      return (
        <ErrorBoundary>
          <ConsumerSwapiService>
            {(swapiService) => {
              const swapiServiceProps = mapPropsSwapiFn(swapiService);
              return <WrapperComponent {...props} {...swapiServiceProps} />;
            }}
          </ConsumerSwapiService>
        </ErrorBoundary>
      );
    };
  };
