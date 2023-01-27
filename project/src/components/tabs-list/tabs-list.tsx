import {useState, useEffect} from 'react';
import {Link, useSearchParams} from 'react-router-dom';
import cn from 'classnames';

import TabOverview from '../tab-overview/tab-overview';
import TabDetails from '../tab-details/tab-details';
import TabReviews from '../tab-reviews/tab-reviews';

import {Film} from '../../types/film';
import {Reviews} from '../../types/review';
import {Tab} from '../../constants';

type TabsListProps = {
  film: Film;
  reviews: Reviews;
};

const TABS: Tab[] = Object.values(Tab);

function TabsList({film, reviews}: TabsListProps): JSX.Element {
  const [searchParams] = useSearchParams();
  const searchTab = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState<string>();

  useEffect(() => {
    const isValidTab = searchTab && TABS.some((tab) => tab === searchTab);

    if (isValidTab) {
      setActiveTab(searchTab);
    } else {
      setActiveTab(Tab.Overview);
    }
  }, [searchTab]);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {TABS.map((tab) => (
            <li
              key={tab}
              className={cn('film-nav__item', {'film-nav__item--active': tab === activeTab})}
            >
              <Link className="film-nav__link" to={`?tab=${tab}`}>{tab}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {activeTab === Tab.Overview && <TabOverview film={film} />}
      {activeTab === Tab.Details && <TabDetails film={film} />}
      {activeTab === Tab.Reviews && <TabReviews reviews={reviews} />}
    </div>
  );
}

export default TabsList;
