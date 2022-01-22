import styled, { css } from 'styled-components'

import { Stack, Heading, TextLink, InformationPanel } from 'smarthr-ui'
import { Base as BaseComponent, Table, Head, Row, Cell, Body, FaFileIcon } from 'smarthr-ui'
import { SmartHRLogo } from 'smarthr-ui'
import { LineUp, Text } from 'smarthr-ui'

export const Collection: React.VFC = () => {
  return (
    <>
      <StyledHeader>
        <LineUp align="space-between" vAlign="center">
          <LineUp vAlign="center" gap={0.5}>
            <a href="">
              <SmartHRLogo title="SmartHR" width={150} height={27} fill="#ffffff" />
            </a>
          </LineUp>
          <NavigationItemWrapper>
            <Text>dummy name</Text>
          </NavigationItemWrapper>
        </LineUp>
      </StyledHeader>
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
            <Base>
              <Table>
                <Head>
                  <Row>
                    <Cell>テーブルセル</Cell>
                    <Cell>テーブルセル</Cell>
                    <Cell>テーブルセル</Cell>
                    <Cell>テーブルセル</Cell>
                    <Cell>テーブルセル</Cell>
                  </Row>
                </Head>
                <Body>
                  <Row>
                    <Cell>
                      <TextLink href={'/'}>
                        <LineUp vAlign="center">
                          <FaFileIcon />
                          text
                        </LineUp>
                      </TextLink>
                    </Cell>
                    <Cell>text</Cell>
                    <Cell>text</Cell>
                    <Cell>text</Cell>
                    <Cell>text</Cell>
                  </Row>
                </Body>
              </Table>
            </Base>
          </Stack>
        </Stack>
      </Content>
      <StyledFooter>
        <LineUp align="space-between" vAlign="center">
          <p>SmartHR, Inc.</p>
        </LineUp>
      </StyledFooter>
    </>
  )
}

const StyledHeader = styled.header(
  ({ theme: { color, space, width } }) => css`
    padding: 0 ${space(1.5)};
    height: fit-content;
    background-color: ${color.BRAND};
    color: ${color.TEXT_WHITE};
    @media (min-width: ${width.CONTENT.MAIN}) {
      padding-right: ${space(2)};
      padding-left: ${space(2)};
    }
  `,
)

const NavigationItemWrapper = styled.div(
  ({ theme: { space } }) =>
    css`
      padding: ${space(0.75)} ${space(0.5)};
    `,
)

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
  ({ theme: { space, radius } }) => css`
    border-radius: ${radius.m};
    overflow: hidden;
  `,
)

const StyledFooter = styled.footer(
  ({ theme: { color, space } }) => css`
    overflow: hidden;
    padding: 0 ${space(1.5)};
    height: fit-content;
    background-color: ${color.BRAND};
    p {
      color: ${color.WHITE};
      padding: ${space(0.75)} ${space(0.5)};
    }
  `,
)
