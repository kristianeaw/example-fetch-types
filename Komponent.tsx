import { FetchResponse, Person, getPerson } from './fetch';

const Komponent = () => {
  const [state, setState] = useState<FetchResponse<Person>>({ type: 'LOADING' });

  useEffect(() => {
    getPerson().then((res) => setState(res));
  }, []);

  switch (state.type) {
    case 'LOADING':
      return <Spinner />;
    case 'ERROR':
      return <ErrorMessage />;
    case 'DATA':
      <h1>Hei {state.data.name} 👋</h1>
  }
}