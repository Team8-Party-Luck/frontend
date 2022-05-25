import React from "react";
import styled from "styled-components";

const PartyDetailDesc = (props) => {
  const { partyData } = props;
  return (
    <WrapBox>
      <DescBox>{partyData?.desc}</DescBox>
    </WrapBox>
  );
};

const WrapBox = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 1.2em;
  padding-bottom: 3em;
`;

const DescBox = styled.div`
  width: 100%;
`;

export default PartyDetailDesc;
