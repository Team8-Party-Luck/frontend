import React from "react";
import styled from "styled-components";

const PartyDetailDesc = ({ desc }) => {
  return (
    <WrapBox>
      <DescBox>{desc}</DescBox>
    </WrapBox>
  );
};

const WrapBox = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 1.2em;
`;

const DescBox = styled.div`
  width: 100%;
`;

export default PartyDetailDesc;
