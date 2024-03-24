import './App.css';
import { useState, useEffect } from 'react';


const query = `
{
  pageCollection {
    items {
      title
      logo {
        url
      }
    }
  }
}
`;

function App() {
  const [page, setPage] = useState(null);

  useEffect(() => {
    window
    .fetch('https://graphql.contentful.com/content/v1/spaces/dgntyti7vajr/',{
      method: "POST",
      headers: {
        "Content-Type" : 'application/json',
        Authorization: "Bearer s37c89UV4h0Ls4K6Auu0QKp-3OvBFn-WB0Sndk5_VYs",
      },
      body: JSON.stringify({query}),
  })
  .then((response) => response.json())
  .then(({data, errors}) => {
    if (errors) {
      console.log(errors);
    }
    setPage(data.pageCollection.items[0]);
  });
},[]);

if (!page) {
  return 'LOADING...';
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={page.logo.url} className="App-logo" alt="logo" />
        <p>
          {page.title}
        </p>
      </header>
    </div>
  );
}

export default App;
