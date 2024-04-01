import { Flex } from '@chakra-ui/react'
import Lottie from 'react-lottie'
import { Outlet } from 'react-router-dom'

import * as animationData from '@/assets/login.json'

export const AuthLayout = () => {
  const loginPage = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <Flex minHeight="100vh" gridGap="0" align="center" justify="center">
      <Flex marginLeft="100px">
        <Lottie options={loginPage} height={400} width={400} />
      </Flex>
      <Flex flex="1" align="center" justify="center" p="8">
        <Outlet />
      </Flex>
    </Flex>
  )
}
