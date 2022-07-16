import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Splash {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  appCode: string;

  @Column()
  splashImage: string;

  @Column()
  logoImage: string;

  @Column()
  facebookLoginIcon: string;

  @Column()
  googleLoginIcon: string;

  @Column()
  inappIcon: string;

  @Column()
  recIcon: string;

  @Column()
  recProgressImage: string;

  @Column()
  premiumUpgradeBannerImage: string;

  @Column()
  premiumUpgradeBannerImageEn: string;
  @Column()
  premiumUpgradeButton1: string;
  @Column()
  premiumUpgradeButton2: string;
  @Column()
  premiumUpgradeButtonEn1: string;
  @Column()
  premiumUpgradeButtonEn2: string;

  @Column()
  recBackgroundImage: string;

  @Column()
  mypageTabIcon1: string;

  @Column()
  mypageTabIcon2: string;

  @Column()
  mypageTabIcon3: string;

  @Column()
  mypageTabIcon4: string;

  @Column()
  giftIconImage: string;

  @Column()
  defaultBackgroundImage: string;

  @Column()
  normalUserSoundMixSaveCount: number;

  @Column()
  normalUserSoundMixDailyPublicCount: number;

  @Column()
  premiumUserSoundMixSaveCount: number;

  @Column()
  premiumUserSoundMixDailyPublicCount: number;

  @Column()
  soundSelectedBackgroundImage: string;

  @Column()
  onesignalAppId: string;

  @Column()
  onesignalRestApiKey: string;

  @Column()
  interstitialAdUnitId: string;

  @Column()
  openAdUnitId: string;

  @Column()
  rewardAdUnitId: string;

  @Column({ select: false })
  policy: string;

  @Column({ select: false })
  terms: string;
}

@Entity("bottomNav")
export class BottomNav {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  // @Column({ length: 255 })
  // titleEn: string;

  @Column({ length: 255 })
  iconImage: string;

  @Column({ length: 255 })
  pageBackgroundImage: string;

  @Column({ length: 255 })
  targetPath: string;

  @Column()
  sortIndex: number;
}

@Entity("intro")
export class Intro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  source: string;
}
