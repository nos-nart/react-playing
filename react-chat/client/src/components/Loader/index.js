import React from 'react'
import './style.css';
import styled from 'styled-components';

export default function Loader({size = 24}) {
  return <LoadingWrapper>
    <svg
      className="loader"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  </LoadingWrapper>
}

const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
