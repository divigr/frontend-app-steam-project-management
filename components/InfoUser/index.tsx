import React from 'react'
import styled from 'styled-components'

// Styled components for layout
const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f4f7fc;
`

const Content = styled.div`
  flex-grow: 1;
  padding: 40px;
`

const Header = styled.header`
  background-color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 28px;
    color: #333;
  }

  button {
    background-color: #e74c3c;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background-color: #c0392b;
    }
  }
`

const UserInfo = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    font-size: 18px;
    color: #555;
  }
`

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const StatBox = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 30%;
  text-align: center;

  h3 {
    font-size: 22px;
    color: #333;
    margin-bottom: 10px;
  }

  span {
    font-size: 32px;
    font-weight: bold;
    color: #2980b9;
  }
`

const DashboardInfo = () => {
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    totalProjects: 12,
    completedTasks: 34,
    pendingTasks: 7,
  }

  return (
    <DashboardContainer>
      {/* Main Content */}
      <Content>
        {/* Header */}
        <Header>
          <h1>Welcome, {user.name}</h1>
          <button>Logout</button>
        </Header>

        <UserInfo>
          <h2>User Information</h2>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </UserInfo>

        {/* Statistics Section */}
        <StatsContainer>
          <StatBox>
            <h3>Total Projects</h3>
            <span>{user.totalProjects}</span>
          </StatBox>
          <StatBox>
            <h3>Completed Tasks</h3>
            <span>{user.completedTasks}</span>
          </StatBox>
          <StatBox>
            <h3>Pending Tasks</h3>
            <span>{user.pendingTasks}</span>
          </StatBox>
        </StatsContainer>
      </Content>
    </DashboardContainer>
  )
}

export default DashboardInfo
