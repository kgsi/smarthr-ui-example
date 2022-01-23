import styled, { css } from 'styled-components'

import {
  Base as BaseComponent,
  Table,
  Head,
  Row,
  Cell,
  Body,
  FaExternalLinkAltIcon,
  Stack,
  Heading,
  TextLink,
  Text,
} from 'smarthr-ui'

export const Home: React.VFC = () => {
  return (
    <>
      <Content fullWidth={true} zIndex={0}>
        <Stack gap={1.5}>
          <Stack>
            <Heading tag="h1">
              <strong>SmartHR UI example</strong>
            </Heading>
            <Text>
              <TextLink href="https://github.com/kufu/smarthr-ui" suffix={<FaExternalLinkAltIcon />}>
                SmartHR UI
              </TextLink>
              を使って作成したレイアウトサンプルです。
            </Text>
          </Stack>
          <Stack>
            <Stack>
              <Base>
                <Table>
                  <Head>
                    <Row>
                      <Cell>サンプルページ</Cell>
                      <Cell>説明</Cell>
                    </Row>
                  </Head>
                  <Body>
                    <Row>
                      <Cell>
                        <TextLink href={'/collection'}>Collection</TextLink>
                      </Cell>
                      <Cell>いわゆる一覧画面。</Cell>
                    </Row>
                  </Body>
                </Table>
              </Base>
            </Stack>
          </Stack>
        </Stack>
      </Content>
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
