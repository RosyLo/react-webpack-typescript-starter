import { FC, Fragment } from 'react';
import ReactDOM from 'react-dom';

const App: FC = () => {
  return <Fragment>Hello World!</Fragment>;
};

const rootNode = document.getElementById('root');
ReactDOM.render(<App />, rootNode);
