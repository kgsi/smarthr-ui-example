import { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import axios from 'axios'

import { Stack, Heading, InformationPanel, SecondaryButton, Pagination, Text } from 'smarthr-ui'
import {
  Base as BaseComponent,
  Table,
  Head,
  Row,
  Cell,
  Body,
  LineUp,
  FaTrashAltIcon,
  FaEditIcon,
  FaSearchIcon,
  FaPlusCircleIcon,
  Input,
} from 'smarthr-ui'

import { Header } from '../../components/ui/Header'
import { Footer } from '../../components/ui/Footer'
import { SpinnerRow } from '../../components/ui/Spinner'

export const Collection: React.VFC = () => {
  const [posts, setPosts] = useState([])
  const [isFetching, setIsFetching] = useState<boolean>(false)

  useEffect(() => {
    setIsFetching(true)
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      setPosts(res.data)
      setIsFetching(false)
    })
  }, [])
  return (
    <>
      <Header />
      <Content fullWidth={true} zIndex={0}>
        <Stack gap={1.5}>
          <Stack>
            <Heading tag="h1">ページタイトル</Heading>
            <p>ページの説明が入ります。</p>
          </Stack>
          <Stack>
            <InformationPanel title={'インフォメーション'}>
              <Stack>
                <p>インフォメーション情報が入ります。</p>
              </Stack>
            </InformationPanel>
          </Stack>
          <Stack>
            <Stack>
              <LineUp align="space-between" vAlign="center">
                <Heading type="sectionTitle" tag="h2">
                  コレクションタイトル
                </Heading>
                <SecondaryButton prefix={<FaPlusCircleIcon />}>オブジェクトを追加</SecondaryButton>
              </LineUp>
            </Stack>
            <Stack>
              <Base>
                <TableHeadNavigation>
                  <LineUp align="space-between" vAlign="center">
                    <LineUp gap={0.5}>
                      <Input prefix={<FaSearchIcon />} />
                      <SecondaryButton>検索</SecondaryButton>
                    </LineUp>
                    <LineUp gap={1} vAlign="center">
                      <Text>
                        <strong>152</strong> 件中<strong>1 - 50</strong> 件を表示中
                      </Text>
                      <Pagination
                        current={7}
                        total={13}
                        withoutNumbers={true}
                        onClick={(number) => {
                          console.log(number)
                        }}
                      />
                    </LineUp>
                  </LineUp>
                </TableHeadNavigation>
                <TableWrapper>
                  <Table>
                    <Head>
                      <Row>
                        <Cell>ID</Cell>
                        <Cell>名前</Cell>
                        <Cell>メールアドレス</Cell>
                        <Cell>会社名</Cell>
                        <Cell>操作</Cell>
                      </Row>
                    </Head>
                    <Body>
                      {isFetching ? (
                        <SpinnerRow colSpan={5} />
                      ) : (
                        posts.map((post: any, index: number) => {
                          return (
                            <Row key={index}>
                              <Cell>{post.id}</Cell>
                              <Cell>{post.name}</Cell>
                              <Cell>{post.email}</Cell>
                              <Cell>{post.company.name}</Cell>
                              <Cell>
                                <LineUp vAlign="center" gap={0.5}>
                                  <SecondaryButton size="s" prefix={<FaEditIcon />}>
                                    編集
                                  </SecondaryButton>
                                  <SecondaryButton size="s" prefix={<FaTrashAltIcon />}>
                                    削除
                                  </SecondaryButton>
                                </LineUp>
                              </Cell>
                            </Row>
                          )
                        })
                      )}
                    </Body>
                  </Table>
                </TableWrapper>
              </Base>
            </Stack>
            <Stack align={'center'}>
              <Pagination
                current={7}
                total={13}
                onClick={(number) => {
                  console.log(number)
                }}
              />
            </Stack>
          </Stack>
        </Stack>
      </Content>
      <Footer />
    </>
  )
}

const Div = styled.div<{ zIndex: number }>(
  ({ zIndex }) => css`
    position: relative;
    z-index: ${zIndex};
  `,
)

const Content = styled(Div)<{ fullWidth: boolean }>(
  ({ fullWidth, theme: { space, width } }) => css`
    margin-right: auto;
    margin-left: auto;
    padding: ${space(2)} ${space(1.5)};
    max-width: ${fullWidth ? 'none' : width.CONTENT.MAIN};
    @media (min-width: ${width.CONTENT.MAIN}) {
      padding-right: ${space(2)};
      padding-left: ${space(2)};
    }
  `,
)

const Base = styled(BaseComponent)(
  ({ theme: { radius } }) => css`
    border-radius: ${radius.m};
    overflow: hidden;
  `,
)

const TableWrapper = styled('div')(
  ({ theme: { space } }) => css`
    overflow-x: scroll;
  `,
)

const TableHeadNavigation = styled('nav')(
  ({ theme: { space } }) => css`
    padding: ${space(1)} ${space(1.5)};
  `,
)
