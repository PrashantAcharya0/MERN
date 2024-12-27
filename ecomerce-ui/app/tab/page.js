'use client';
import { Button, CircularProgress } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

// hooks => react function which starts with "use" keyword
// e.g useState, useEffect, useMemo, useCallback, useRef
//  third party hooks => useDispatch, useSelector, useQuery, useMutation
//  we can also create custom hooks
// useState => like variable which holds value and also tracks where to paint the value in dom
// useEffect => react lifecycle (mounting,updating, unmounting)
// syntax
// useEffect(callback function)
// useEffect(callback function ,[])
// useEffect(callback function ,[value])
// useEffect(callback function ,[value1, value2, ...])
//  popular uses => data fetching, updating dom based upon condition

const Tab = () => {
  const [value, setValue] = useState('post');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );
        setIsLoading(false);
        setData(res?.data);
        console.log(res);
      } catch (error) {
        setIsLoading(false);
        setError('Something went wrong....');
      }
    };

    getTodos();

    return () => {
      console.log('Tab is removed from dom');
    };
  }, []);

  if (isLoading) {
    return <p className="text-5xl bold underline text-gray-900">Loading....</p>;
  }

  if (error) {
    return <p className="text-3xl text-red-800">{error}</p>;
  }
  return (
    <div>
      <p className="text-3xl bold">use effect</p>
      <p className="text-3xl bold text-green-600">
        {' '}
        User has selection tab: {value}
      </p>

      <div>
        <Button
          onClick={() => {
            setValue('post');
          }}
        >
          Post
        </Button>
        <Button
          onClick={() => {
            setValue('comment');
          }}
        >
          Comment
        </Button>

        <Button
          onClick={() => {
            setValue('pic');
          }}
        >
          Pictures
        </Button>

        <div>
          {data.map((item, index) => {
            return <p key={index}>{item.title}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Tab;
