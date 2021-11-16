/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React from 'react'
import PropTypes from 'prop-types'
import {useIntl, FormattedMessage} from 'react-intl'
import {
    Box,
    Button,
    SimpleGrid,
    HStack,
    VStack,
    Text,
    Flex,
    Stack,
    Container,
    Link
} from '@chakra-ui/react'
import {getAssetUrl} from 'pwa-kit-react-sdk/ssr/universal/utils'
import Hero from '../../components/hero'
import Seo from '../../components/seo'
import Section from '../../components/section'
import {heroFeatures, features} from './data'
import RecommendedProducts from '../../components/recommended-products'

/**
 * This is the home page for Retail React App.
 * The page is created for demonstration purposes.
 * The page renders SEO metadata and a few promotion
 * categories and products, data is from local file.
 */
const Home = () => {
    const intl = useIntl()

    return (
        <Box data-testid="home-page" layerStyle="page">
            <Seo
                title="Home Page"
                description="Commerce Cloud Retail React App"
                keywords="Commerce Cloud, Retail React App, React Storefront"
            />

            <Hero
                title={intl.formatMessage({
                    defaultMessage: 'Retail React App: PWA Kit starter store'
                })}
                img={{
                    src: getAssetUrl('static/img/hero.png'),
                    alt: intl.formatMessage({
                        defaultMessage: 'npx pwa-kit-create-app'
                    })
                }}
                actions={
                    <Stack spacing={{base: 4, sm: 6}} direction={{base: 'column', sm: 'row'}}>
                        <Button
                            as={Link}
                            target="_blank"
                            href="https://developer.commercecloud.com/s/article/PWA-Kit"
                            width={{base: 'full', md: 'inherit'}}
                            px={7}
                        >
                            <FormattedMessage defaultMessage="Get started" />
                        </Button>

                        <Button
                            as={Link}
                            target="_blank"
                            href="https://trailhead.salesforce.com/content/learn/modules/commerce-pwa-kit-and-managed-runtime"
                            width={{base: 'full', md: 'inherit'}}
                            px={7}
                            variant="outline"
                        >
                            <FormattedMessage defaultMessage="Learn with Trailhead" />
                        </Button>
                    </Stack>
                }
                marginBottom={10}
            />

            <Section
                bg={'gray.50'}
                mx="auto"
                py={{base: 8, md: 16}}
                px={{base: 4, md: 8}}
                borderRadius="base"
                width={{base: '100vw', md: 'inherit'}}
                position={{base: 'relative', md: 'inherit'}}
                left={{base: '50%', md: 'inherit'}}
                right={{base: '50%', md: 'inherit'}}
                marginLeft={{base: '-50vw', md: 'auto'}}
                marginRight={{base: '-50vw', md: 'auto'}}
            >
                <SimpleGrid
                    columns={{base: 1, md: 1, lg: 3}}
                    spacingX={{base: 1, md: 4}}
                    spacingY={{base: 4, md: 14}}
                >
                    {heroFeatures.map((feature, index) => {
                        const featureMessage = feature.message
                        return (
                            <Box
                                key={index}
                                bg={'white'}
                                boxShadow={'0px 2px 2px rgba(0, 0, 0, 0.1)'}
                                borderRadius={'4px'}
                            >
                                <Link target="_blank" href={feature.href}>
                                    <HStack>
                                        <Flex pl={6} h={24} align={'center'} justify={'center'}>
                                            {feature.icon}
                                        </Flex>
                                        <VStack align={'start'}>
                                            <Text fontWeight="700">
                                                {intl.formatMessage(featureMessage.title)}
                                            </Text>
                                        </VStack>
                                    </HStack>
                                </Link>
                            </Box>
                        )
                    })}
                </SimpleGrid>
            </Section>

            <Section
                p={4}
                pt={16}
                title={intl.formatMessage({
                    defaultMessage: 'Shop Products'
                })}
                subtitle={intl.formatMessage(
                    {
                        defaultMessage:
                            'This section contains content from the catalog. {link} on how to replace it.'
                    },
                    {
                        link: (
                            <Link
                                target="_blank"
                                href={
                                    'https://documentation.b2c.commercecloud.salesforce.com/DOC2/topic/com.demandware.dochelp/content/b2c_commerce/topics/catalogs/b2c_manage_catalogs.html'
                                }
                                textDecoration={'none'}
                                position={'relative'}
                                _after={{
                                    position: 'absolute',
                                    content: `""`,
                                    height: '2px',
                                    bottom: '-2px',
                                    margin: '0 auto',
                                    left: 0,
                                    right: 0,
                                    background: 'gray.700'
                                }}
                                _hover={{textDecoration: 'none'}}
                            >
                                {intl.formatMessage({
                                    defaultMessage: 'Read docs'
                                })}
                            </Link>
                        )
                    }
                )}
            >
                <Stack pt={8} spacing={16}>
                    <RecommendedProducts
                        recommender={'products-in-all-categories'}
                        mx={{base: -4, md: -8, lg: 0}}
                    />
                </Stack>
            </Section>

            <Section
                p={4}
                pt={32}
                title={intl.formatMessage({
                    defaultMessage: 'Features'
                })}
                subtitle={intl.formatMessage({
                    defaultMessage:
                        'Out-of-the-box features so that you focus only on adding enhancements.'
                })}
            >
                <Container maxW={'6xl'} mt={10}>
                    <SimpleGrid columns={{base: 1, md: 2, lg: 3}} spacing={10}>
                        {features.map((feature, index) => {
                            const featureMessage = feature.message
                            return (
                                <HStack key={index} align={'top'}>
                                    <VStack align={'start'}>
                                        <Flex
                                            w={16}
                                            h={16}
                                            align={'center'}
                                            justify={'left'}
                                            color={'gray.900'}
                                            px={2}
                                        >
                                            {feature.icon}
                                        </Flex>
                                        <Text color={'black'} fontWeight={700} fontSize={20}>
                                            {intl.formatMessage(featureMessage.title)}
                                        </Text>
                                        <Text color={'black'}>
                                            {intl.formatMessage(featureMessage.text)}
                                        </Text>
                                    </VStack>
                                </HStack>
                            )
                        })}
                    </SimpleGrid>
                </Container>
            </Section>

            <Section
                p={4}
                pt={32}
                title={intl.formatMessage({
                    defaultMessage: "We're here to help"
                })}
                subtitle={intl.formatMessage(
                    {
                        defaultMessage:
                            'Contact our support staff and they’ll get {br} you to the right place.'
                    },
                    {
                        br: <br />
                    }
                )}
                actions={
                    <Button
                        as={Link}
                        href={'https://help.salesforce.com/s/?language=en_US'}
                        target="_blank"
                        width={'auto'}
                        px={7}
                    >
                        <FormattedMessage defaultMessage="Contact Us" />
                    </Button>
                }
                maxWidth={'xl'}
            />
        </Box>
    )
}

Home.getTemplateName = () => 'home'
Home.propTypes = {
    recommendations: PropTypes.array,
    isLoading: PropTypes.bool
}

Home.getProps = async ({res}) => {
    // Since the home page is static, it is safe to set max age to a high value
    // we set it to a year here, but you can set the value that is suitable for your project
    if (res) {
        res.set('Cache-Control', 'max-age=31536000')
    }
}

export default Home
