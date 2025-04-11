import { Skeleton, Statistic, Typography } from '@arco-design/web-react'

import cs from 'classnames'
import styles from './style/public-opinion.module.less'
import SimpleLine from "@/components/data-analysis/SimpleLine";
import {IconArrowFall, IconArrowRise} from "@arco-design/web-react/icon";
const { Title, Text } = Typography

export interface PublicOpinionCardProps {
    key: string
    title?: string
    chartData?: any[]
    chartType: 'line' | 'interval' | 'pie'
    count?: number
    increment?: boolean
    diff?: number
    compareTime?: string
    loading?: boolean
}
function PublicOpinionCard(props: PublicOpinionCardProps) {
    const { chartType, title, count, increment, diff, chartData, loading, compareTime } = props
    const className = cs(styles.card, styles[`card-${chartType}`])

    return (
        <div className={className}>
            <div className={styles.statistic}>
                <Statistic
                    title={
                        <Title heading={6} className={styles.title}>
                            {title}
                        </Title>
                    }
                    loading={loading}
                    value={count}
                    groupSeparator
                />
                <div className={styles['compare-yesterday']}>
                    <Text type="secondary" className={styles['compare-yesterday-text']}>
                        {compareTime}
                    </Text>
                    <span
                        className={cs(styles['diff'], {
                            [styles['diff-increment']]: increment
                        })}
                    >
            {loading ? (
                <Skeleton text={{ rows: 1 }} animation />
            ) : (
                <>
                    {diff}
                    {increment ? <IconArrowRise /> : <IconArrowFall />}
                </>
            )}
          </span>
                </div>
            </div>
            <div className={styles.chart}>
                {loading ? (
                    <Skeleton text={{ rows: 3, width: Array(3).fill('100%') }} animation />
                ) : (
                    <>
                        {chartType === 'line' && <SimpleLine chartData={chartData} />}
                    </>
                )}
            </div>
        </div>
    )
}

export default PublicOpinionCard