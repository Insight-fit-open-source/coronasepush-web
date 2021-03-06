import styled from 'styled-components';
import colors from 'src/app/theme/colors';
import breakpoints from 'src/app/theme/breakpoints';

export default styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: ${colors.blueDark};
  transform: ${props =>
    props.layoutActive ? 'translate3d(0%, 0%, 0)' : 'translate3d(0%, 35%, 0)'};
  transition: transform 0.365s ease-in;

  .backdrop__content {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    padding: 1.5rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${colors.blueDark};
    color: ${colors.white};

    @media (max-height: 750px) {
      overflow-y: scroll;
      display: block;
    }

    @media only screen and (min-width: ${breakpoints.values.md}px) {
      padding: 3rem 30% 3rem 3rem;
    }

    @media only screen and (min-width: ${breakpoints.values.lg}px) {
      padding: 3rem 50% 3rem 3rem;
    }

    h1 {
      margin-bottom: 3rem;
      position: relative;
      font-size: calc(1.5rem + 2.5vw);
      line-height: 1;

      @media only screen and (min-width: ${breakpoints.values.md}px) {
        font-size: 3rem;
      }

      &:after {
        content: '';
        width: 3rem;
        height: 0.2rem;
        background-color: ${colors.pink};
        position: absolute;
        display: block;
        bottom: -1.6rem;
        left: 0;
      }
    }

    p {
      opacity: 0.75;
      font-weight: 300;
      margin-bottom: 1.5rem;
    }

    button {
      max-width: 15rem;
      padding: 0.75rem 0;
      margin-top: 4.5rem;
      width: 100%;
    }
  }

  .backdrop__img {
    position: absolute;
    z-index: -1;
    height: 100%;
    width: 65%;
    top: 0;
    right: 0;
    object-fit: cover;
    object-position: center;
    opacity: 0;
    transition: opacity 0.365s;

    &.active {
      opacity: 1;
    }

    img {
      height: 100%;
      position: absolute;
      right: 0;
    }
  }
`;
