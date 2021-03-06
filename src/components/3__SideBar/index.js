import { lazy, Suspense } from "react";
import styled from "styled-components";
import useFetch from "../_Hooks/useFetch";
import Link from "../_Styled/link";

const Button = lazy(() => import("../_Styled/3_button"));
const FollowersDiv = lazy(() => import("../_Styled/3_followers"));
const InfosDiv = lazy(() => import("../_Styled/3_infos"));
const UsernameDiv = lazy(() => import("../_Styled/3_username"));
const OrganizationDiv = lazy(() => import("../_Styled/3_organization"));

const SideBar = () => {
  const URL = `https://api.github.com/users/Archianne`;
  const [value] = useFetch(URL);
  return (
    <StyledSideBar id="sideBar">
      <Suspense fallback={<div>Loading</div>}>
        <UsernameDiv value={value} />

        <div id="button">
          <Link href="https://github.com/Archianne" target="blank">
            <Button>Follow</Button>
          </Link>
        </div>

        <div id="bio">
          <p>{value.bio}</p>
        </div>

        <FollowersDiv value={value} />
        <InfosDiv value={value} />

        <OrganizationDiv value={value} />
      </Suspense>
    </StyledSideBar>
  );
};

export default SideBar;

const StyledSideBar = styled.aside`
  display: flex;
  flex-direction: column;
  line-height: 21px;
  width: 24%;
  max-width: 312px;
  margin: -30px 8px 0 8px;
  padding-left: 16px;

  #bio {
    p {
    padding: 16px 0;
    }
  }

  .icon {
    margin-right: 5px;
  }

  @media (max-width: 768px) {
    margin: 0;
    padding: 0;
    max-width: 90vw;

    #username {
      order: 1;
    }

    #bio {
      order: 2;
    }

    #infos {
      order: 3;
    }

    #followers {
      margin-top: 8px;
      order: 4;
    }

    #button {
      order: 5;
      margin: 0 0 16px 0;
      padding: 0;
      width: 100%;
      text-align: center;
    }

    #organization {
      display: none;
    }

`;
