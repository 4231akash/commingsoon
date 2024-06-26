"use client";

import "../global.css";
import datas from "../../../constant/language";
import { IntlProvider, FormattedMessage } from "react-intl";
import { useEffect, useState } from "react";

const Countdown = ({ targetDate, lang }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  var language = datas.english;

  if (lang == "japneese") {
    language = datas.japneese;
  }
  if (lang == "french") {
    language = datas.french;
  }
  if (lang == "chinese") {
    language = datas.chinese;
  }
  if (lang == "spanish") {
    language = datas.spanish;
  }

  return (
    <div>
      {hydrated && (
        <div>
          <div>
            {Object.keys(timeLeft).length === 0 ? (
              <span>Time's up!</span>
            ) : (
              <IntlProvider messages={language} locale="en" defaultLocale="en">
                <div className="days">
                  <div>
                    <span className="day">{timeLeft.days} </span>
                    <p>
                      {" "}
                      <FormattedMessage id={language.days} />
                    </p>
                  </div>
                  <div>
                    <span className="hour">{timeLeft.hours} </span>
                    <p>
                      <FormattedMessage id={language.hours} />
                    </p>
                  </div>

                  <div>
                    <span className="day">{timeLeft.minutes}</span>
                    <p>
                      <FormattedMessage id={language.minutes} />
                    </p>
                  </div>
                  <div>
                    <span className="sec">{timeLeft.seconds}</span>
                    <p>
                      <FormattedMessage id={language.seconds} />
                    </p>
                  </div>
                </div>
              </IntlProvider>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Countdown;
