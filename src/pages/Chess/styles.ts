import styled from "styled-components";
import { darken } from "polished";

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-items: center;
  align-items: center;
  .head {
    grid-area: 1 / 1 / 2 / 6;
  }
  .left-side {
    grid-area: 2 / 1 / 5 / 2;
  }
  .footer {
    grid-area: 5 / 2 / 6 / 5;
  }
  .game {
    grid-area: 2 / 2 / 5 / 5;
  }
  .right-side {
    grid-area: 2 / 5 / 5 / 6;
  }
`;

export const ChessTable = styled.div`
  height: 801px;
  width: 801px;
  display: grid;
  background: #65a261;
  border: 1px solid #555;

  & td {
    vertical-align: middle;
    text-align: center;
    border: 1px solid #555;
  }

  & tr:nth-child(odd) td:nth-child(odd) {
    background-color: #bfd8bd;
  }

  & tr:nth-child(even) td:nth-child(even) {
    background-color: #bfd8bd;
  }
`;

export const ChessOverlay = styled.div`
  height: 801px;
  width: 801px;
  position: absolute;
  display: grid;
  flex-wrap: wrap;

  & > div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    &#whiteside {
      align-self: baseline;
    }
    &#blackside {
      align-self: flex-end;
    }
  }
`;

// > div {
//   &[data-type="tower"] {
//     background: url("./torrebranca.png") no-repeat center;
//   }
//   &[data-type="horse"] {
//     background: url("./cavalobranco.png") no-repeat center;
//   }
//   &[data-type="bisp"] {
//     background: url("./bispobranco.png") no-repeat center;
//   }
//   &[data-type="queen"] {
//     background: url("./rainhabranca.png") no-repeat center;
//   }
//   &[data-type="king"] {
//     background: url("./reibranco.png") no-repeat center;
//   }
//   &[data-type="peon"] {
//     background: url("./peaobranco.png") no-repeat center;
//   }
// }

// > div {
//   &[data-type="tower"] {
//     background: url("./torrepreta.png") no-repeat center;
//   }
//   &[data-type="horse"] {
//     background: url("./cavalopreto.png") no-repeat center;
//   }
//   &[data-type="bisp"] {
//     background: url("./bispopreto.png") no-repeat center;
//   }
//   &[data-type="queen"] {
//     background: url("./rainhapreta.png") no-repeat center;
//   }
//   &[data-type="king"] {
//     background: url("./reipreto.png") no-repeat center;
//   }
//   &[data-type="peon"] {
//     background: url("./peaopreto.png") no-repeat center;
//   }
// }
