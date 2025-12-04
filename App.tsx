import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { HomePage } from './pages/HomePage';
import { GamesIndexPage } from './pages/games/GamesIndexPage';
import { BaccaratPage } from './pages/games/BaccaratPage';
import { SlotsPage } from './pages/games/SlotsPage';
import { SportsPage } from './pages/games/SportsPage';
import { PokerPage } from './pages/games/PokerPage';
import { LotteryPage } from './pages/games/LotteryPage';
import { RegisterGuidePage } from './pages/guides/RegisterGuidePage';
import { WithdrawalGuidePage } from './pages/guides/WithdrawalGuidePage';
import { USDTDepositGuidePage } from './pages/guides/USDTDepositGuidePage';
import { ForgotPasswordGuidePage } from './pages/guides/ForgotPasswordGuidePage';
import { ScamPreventionGuidePage } from './pages/guides/ScamPreventionGuidePage';
import { PromotionsPage } from './pages/PromotionsPage';
import { MonthlyPromotionsPage } from './pages/promotions/MonthlyPromotionsPage';
import { NewsPage } from './pages/NewsPage';
import { AboutPage } from './pages/trust/AboutPage';
import { SecurityPage } from './pages/trust/SecurityPage';
import { ContactPage } from './pages/trust/ContactPage';
import { InfluencerPage } from './pages/trust/InfluencerPage';
import { NewsDetailPage } from './pages/NewsDetailPage';
import { ArticlePage } from './pages/ArticlePage';
// 遊戲攻略
import { GameGuidesIndexPage } from './pages/guides/games/GameGuidesIndexPage';
import { BaccaratGuidesIndexPage } from './pages/guides/games/baccarat/BaccaratGuidesIndexPage';
import { BaccaratBasicsPage } from './pages/guides/games/baccarat/BaccaratBasicsPage';
import { BaccaratRoadReadingPage } from './pages/guides/games/baccarat/BaccaratRoadReadingPage';
import { BaccaratBettingStrategyPage } from './pages/guides/games/baccarat/BaccaratBettingStrategyPage';
import { BaccaratAdvancedTipsPage } from './pages/guides/games/baccarat/BaccaratAdvancedTipsPage';
import { SlotsGuidesIndexPage } from './pages/guides/games/slots/SlotsGuidesIndexPage';
import { SlotsRTPGuidePage } from './pages/guides/games/slots/SlotsRTPGuidePage';
import { SlotsVolatilityPage } from './pages/guides/games/slots/SlotsVolatilityPage';
import { SlotsJackpotStrategyPage } from './pages/guides/games/slots/SlotsJackpotStrategyPage';
import { SportsGuidesIndexPage } from './pages/guides/games/sports/SportsGuidesIndexPage';
import { SportsBankrollManagementPage } from './pages/guides/games/sports/SportsBankrollManagementPage';
import { SportsOddsAnalysisPage } from './pages/guides/games/sports/SportsOddsAnalysisPage';
import { SportsLiveBettingPage } from './pages/guides/games/sports/SportsLiveBettingPage';
import { PokerGuidesIndexPage } from './pages/guides/games/poker/PokerGuidesIndexPage';
import { PokerStartingHandsPage } from './pages/guides/games/poker/PokerStartingHandsPage';
import { PokerPositionPlayPage } from './pages/guides/games/poker/PokerPositionPlayPage';
import { PokerTournamentStrategyPage } from './pages/guides/games/poker/PokerTournamentStrategyPage';
// 娛樂城攻略
import { CasinoGuidesIndexPage } from './pages/guides/casino/CasinoGuidesIndexPage';
import { RegistrationIndexPage } from './pages/guides/casino/registration/RegistrationIndexPage';
import { RegistrationStepByStepPage } from './pages/guides/casino/registration/RegistrationStepByStepPage';
import { RegistrationVerificationPage } from './pages/guides/casino/registration/RegistrationVerificationPage';
import { RegistrationBonusClaimPage } from './pages/guides/casino/registration/RegistrationBonusClaimPage';
import { DepositIndexPage } from './pages/guides/casino/deposit/DepositIndexPage';
import { DepositMethodsPage } from './pages/guides/casino/deposit/DepositMethodsPage';
import { DepositBankTransferPage } from './pages/guides/casino/deposit/DepositBankTransferPage';
import { WithdrawalIndexPage } from './pages/guides/casino/withdrawal/WithdrawalIndexPage';
import { WithdrawalSpeedComparisonPage } from './pages/guides/casino/withdrawal/WithdrawalSpeedComparisonPage';
import { WithdrawalTroubleshootingPage } from './pages/guides/casino/withdrawal/WithdrawalTroubleshootingPage';
import { BonusesIndexPage } from './pages/guides/casino/bonuses/BonusesIndexPage';
import { BonusesTypesPage } from './pages/guides/casino/bonuses/BonusesTypesPage';
import { BonusesWageringRequirementsPage } from './pages/guides/casino/bonuses/BonusesWageringRequirementsPage';
import { BonusesBestPracticesPage } from './pages/guides/casino/bonuses/BonusesBestPracticesPage';
// 娛樂城推薦
import { RecommendationsIndexPage } from './pages/recommendations/RecommendationsIndexPage';
import { BestCasinos2025Page } from './pages/recommendations/best-casinos/BestCasinos2025Page';
import { FastWithdrawalPage } from './pages/recommendations/best-casinos/FastWithdrawalPage';
import { HighBonusPage } from './pages/recommendations/best-casinos/HighBonusPage';
import { USDTFriendlyPage } from './pages/recommendations/best-casinos/USDTFriendlyPage';
// 論壇頁面
import { ForumIndexPage } from './pages/forum/ForumIndexPage';
import { ForumCategoryPage } from './pages/forum/ForumCategoryPage';
import { TopicPage } from './pages/forum/TopicPage';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="bg-slate-950 min-h-screen text-slate-300 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
          <Navbar />
          <main className="relative">
            <Routes>
              {/* 首頁 */}
              <Route path="/" element={<HomePage />} />

              {/* 遊戲專區 */}
              <Route path="/games" element={<GamesIndexPage />} />
              <Route path="/games/baccarat" element={<BaccaratPage />} />
              <Route path="/games/slots" element={<SlotsPage />} />
              <Route path="/games/sports" element={<SportsPage />} />
              <Route path="/games/poker" element={<PokerPage />} />
              <Route path="/games/lottery" element={<LotteryPage />} />
              <Route path="/games/electronic" element={<SlotsPage />} /> {/* 電子遊戲 */}
              <Route path="/games/fishing" element={<SlotsPage />} /> {/* 捕魚機 */}
              <Route path="/games/esports" element={<SportsPage />} /> {/* 電競暫時使用相同頁面 */}

              {/* 新手教學 */}
              <Route path="/guides/register" element={<RegisterGuidePage />} />
              <Route path="/guides/withdrawal" element={<WithdrawalGuidePage />} />
              <Route path="/guides/usdt-deposit" element={<USDTDepositGuidePage />} />
              <Route path="/guides/forgot-password" element={<ForgotPasswordGuidePage />} />
              <Route path="/guides/scam-prevention" element={<ScamPreventionGuidePage />} />

              {/* 遊戲攻略 */}
              <Route path="/guides/games" element={<GameGuidesIndexPage />} />
              {/* 百家樂攻略 */}
              <Route path="/guides/games/baccarat" element={<BaccaratGuidesIndexPage />} />
              <Route path="/guides/games/baccarat/basics" element={<BaccaratBasicsPage />} />
              <Route path="/guides/games/baccarat/road-reading" element={<BaccaratRoadReadingPage />} />
              <Route path="/guides/games/baccarat/betting-strategy" element={<BaccaratBettingStrategyPage />} />
              <Route path="/guides/games/baccarat/advanced-tips" element={<BaccaratAdvancedTipsPage />} />
              {/* 老虎機攻略 */}
              <Route path="/guides/games/slots" element={<SlotsGuidesIndexPage />} />
              <Route path="/guides/games/slots/rtp-guide" element={<SlotsRTPGuidePage />} />
              <Route path="/guides/games/slots/volatility" element={<SlotsVolatilityPage />} />
              <Route path="/guides/games/slots/jackpot-strategy" element={<SlotsJackpotStrategyPage />} />
              {/* 體育投注攻略 */}
              <Route path="/guides/games/sports" element={<SportsGuidesIndexPage />} />
              <Route path="/guides/games/sports/bankroll-management" element={<SportsBankrollManagementPage />} />
              <Route path="/guides/games/sports/odds-analysis" element={<SportsOddsAnalysisPage />} />
              <Route path="/guides/games/sports/live-betting" element={<SportsLiveBettingPage />} />
              {/* 德州撲克攻略 */}
              <Route path="/guides/games/poker" element={<PokerGuidesIndexPage />} />
              <Route path="/guides/games/poker/starting-hands" element={<PokerStartingHandsPage />} />
              <Route path="/guides/games/poker/position-play" element={<PokerPositionPlayPage />} />
              <Route path="/guides/games/poker/tournament-strategy" element={<PokerTournamentStrategyPage />} />

              {/* 娛樂城攻略 */}
              <Route path="/guides/casino" element={<CasinoGuidesIndexPage />} />
              {/* 註冊相關 */}
              <Route path="/guides/casino/registration" element={<RegistrationIndexPage />} />
              <Route path="/guides/casino/registration/step-by-step" element={<RegistrationStepByStepPage />} />
              <Route path="/guides/casino/registration/verification" element={<RegistrationVerificationPage />} />
              <Route path="/guides/casino/registration/bonus-claim" element={<RegistrationBonusClaimPage />} />
              {/* 儲值相關 */}
              <Route path="/guides/casino/deposit" element={<DepositIndexPage />} />
              <Route path="/guides/casino/deposit/methods" element={<DepositMethodsPage />} />
              <Route path="/guides/casino/deposit/bank-transfer" element={<DepositBankTransferPage />} />
              {/* 出金相關 */}
              <Route path="/guides/casino/withdrawal" element={<WithdrawalIndexPage />} />
              <Route path="/guides/casino/withdrawal/speed-comparison" element={<WithdrawalSpeedComparisonPage />} />
              <Route path="/guides/casino/withdrawal/troubleshooting" element={<WithdrawalTroubleshootingPage />} />
              {/* 優惠相關 */}
              <Route path="/guides/casino/bonuses" element={<BonusesIndexPage />} />
              <Route path="/guides/casino/bonuses/types" element={<BonusesTypesPage />} />
              <Route path="/guides/casino/bonuses/wagering-requirements" element={<BonusesWageringRequirementsPage />} />
              <Route path="/guides/casino/bonuses/best-practices" element={<BonusesBestPracticesPage />} />

              {/* 娛樂城推薦 */}
              <Route path="/recommendations" element={<RecommendationsIndexPage />} />
              <Route path="/recommendations/best-casinos/2025" element={<BestCasinos2025Page />} />
              <Route path="/recommendations/best-casinos/fast-withdrawal" element={<FastWithdrawalPage />} />
              <Route path="/recommendations/best-casinos/high-bonus" element={<HighBonusPage />} />
              <Route path="/recommendations/best-casinos/usdt-friendly" element={<USDTFriendlyPage />} />

              {/* 優惠活動 */}
              <Route path="/promotions" element={<PromotionsPage />} />
              <Route path="/promotions/monthly/:year/:month" element={<MonthlyPromotionsPage />} />

              {/* 論壇專區 (與 SEO 文章共用 topic 路徑) */}
              <Route path="/forum" element={<ForumIndexPage />} />
              <Route path="/forum/c/:category" element={<ForumCategoryPage />} />
              <Route path="/topic/:slug" element={<ArticlePage />} />

              {/* 最新消息 */}
              <Route path="/news" element={<NewsPage />} />
              <Route path="/news/:id" element={<NewsDetailPage />} />

              {/* 可信任信號頁 */}
              <Route path="/trust/about" element={<AboutPage />} />
              <Route path="/trust/security" element={<SecurityPage />} />
              <Route path="/trust/contact" element={<ContactPage />} />
              <Route path="/trust/influencer" element={<InfluencerPage />} />

              {/* 註冊頁面（暫時導向首頁） */}
              <Route path="/register" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
