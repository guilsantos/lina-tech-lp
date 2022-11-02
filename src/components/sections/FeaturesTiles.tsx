import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import { features } from "./consts";

const Card = ({ icon, iconText, title, text, delay }: any) => (
  <div className="tiles-item reveal-from-bottom" data-reveal-delay={delay}>
    <div className="tiles-item-inner">
      <div className="features-tiles-item-header">
        <div className="features-tiles-item-image mb-16">
          <Image src={icon} alt={iconText} width={64} height={64} />
        </div>
      </div>
      <div className="features-tiles-item-content">
        <h4 className="mt-0 mb-8">{title}</h4>
        <p className="m-0 text-sm">{text}</p>
      </div>
    </div>
  </div>
);

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}: any) => {
  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: "Build up the whole picture",
    paragraph:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            {features.map((feature) => (
              <Card
                icon={feature.icon}
                iconText={feature.iconText}
                title={feature.title}
                text={feature.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
