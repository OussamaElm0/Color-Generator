import React from 'react';
import styled from 'styled-components';

export default function Home() {
    const Container = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 100px;
      color: #2d9596;
    `;

    return (
        <div>
            <Container>
                <h1>This is a simple color generator built with react and redux</h1>
            </Container>
        </div>
    )
}