import React from 'react';

//import global styles
import GlobalStyle from './components/GlobalStyle';
import Pages from './pages';

const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <Pages />
    </div>
  );
};

export default App;
