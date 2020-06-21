export interface Person {
  name: string;
}

export function getPerson(): Promise<FetchResponse<Person>> {
  return fetch('https://mitt.api.no', {
    method: 'GET',
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .then((json): FetchSuccess<Person> => {
      return { type: 'DATA', data: json };
    })
    .catch((error) => {
      // Her kan man gjøre noe smart hvis man vil
      return { type: 'ERROR' };
    });
};

export interface FetchSuccess<T> {
  type: 'DATA';
  data: T;
}

export interface FetchError {
  type: 'ERROR';
}

export interface FetchLoading {
  type: 'LOADING';
}

export type FetchResponse<T> = FetchSuccess<T> | FetchError | FetchLoading;

