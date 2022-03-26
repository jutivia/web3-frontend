import clsx from 'clsx'
import React from 'react'
import Card from './Card/Card'
import Styles from './MyStake.module.css'

const MyStake = ({
  withdrawInput,
  stakeInput,
  onChangeInput,
  onClickStake,
  onClickWithdraw,
  onClickGetAddress,
  userTotal,
  rewardAmount,
  stakeAmount,
  connected,
  addressInput
}) => {
  return (
    <div className={Styles.root}>
      <h2 className={Styles.heading}>My stake</h2>

      <div className={Styles.stake_body}>
        <div className={Styles.card_container}>
          <Card cardKey="Total Staked" cardValue={stakeAmount} />
          <Card cardKey="Total Reward" cardValue={rewardAmount} />
        </div>
        <form onSubmit={onClickStake} className={Styles.form}>
          <input
            type="number"
            placeholder="Amount to stake"
            className={Styles.input}
            value={stakeInput}
            onChange={onChangeInput}
            id="stake"
          />
          <button
            type="submit"
            className={clsx({
              [Styles.stake_btn]: true,
              [Styles.btn_diabled]: !connected,
            })}
            disabled={!connected}
          >
            Stake
          </button>
        </form>

        <form onSubmit={onClickWithdraw} className={Styles.form}>
          <input
            type="number"
            placeholder="Amount to unstake"
            className={Styles.input}
            value={withdrawInput}
            onChange={onChangeInput}
            id="unstake"
          />
          <button
            type="submit"
            className={clsx({
              [Styles.unstake_btn]: true,
              [Styles.btn_diabled]: !connected,
            })}
            disabled={!connected}
          >
            Unstake
          </button>
        </form>
        <form onSubmit={onClickGetAddress} className={Styles.form}>
          <input
            type="text"
            placeholder="Address of Staker"
            className={Styles.input}
            value={addressInput}
            onChange={onChangeInput}
            id="getAddress"
          />
          <button type="submit" className={Styles.getAddress_btn}>
            Get stake
          </button>
        </form>
        <br />
        <h2> {userTotal ? `Stake:  ${userTotal}` : ''}</h2>
      </div>
    </div>
  );
};

export default MyStake