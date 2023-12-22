export type DataTableRow = {
    strategy: string;
    tvl: string;
    volatility: 'low' | 'medium' | 'high';
    collateral: string;
    pnl: number;
}

export const data: DataTableRow[] = [
    {
        strategy: 'Strategy 1',
        tvl: '$100,000',
        volatility: 'low',
        collateral: '$1,000',
        pnl: 100
    },
    {
        strategy: 'Strategy 2',
        tvl: '$12,500',
        volatility: 'medium',
        collateral: '$1,000',
        pnl: -100
    },
    {
        strategy: 'Strategy 3',
        tvl: '$12,500',
        volatility: 'medium',
        collateral: '$1,000',
        pnl: 100
    },
    {
        strategy: 'Strategy 4',
        tvl: '$25,000',
        volatility: 'high',
        collateral: '$1,000',
        pnl: 100
    }
]