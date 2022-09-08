import React,{Suspense, useState} from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Greeting} from './components/Greeting';
import {Navigation} from './components/Navigation';
import {Text} from './components/Text';
import {Loading} from './components/Loading';
import i18n from './i18n';
import LocaleContext from './LocaleContext'

function App() {
const [locale, setLocale]= useState(i18n.language)
i18n.on('languageChanged', (lng) => setLocale(i18n.language));

  return (
    <LocaleContext.Provider value={{locale, setLocale}}>

    <Suspense fallback={<Loading/>} >
      <Navigation />
      <Container>
      	<Greeting />
      	<Text />
      </Container>
    </Suspense>
    </LocaleContext.Provider>
  );
}

export default App;
