export type Reward = {
    id: number, 
    rewardCost: number,
    rewardBonus: number,
    isExclusive: boolean
}

export type RewardList = Reward[];