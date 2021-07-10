import React from 'react';
import styles from './IntroductionSection.module.css';
import SectionHeading from './SectionHeading';

export default function IntroductionSection() {
  return (
    <div className={styles.introductionSection}>
      <SectionHeading>The best rocks on Earth</SectionHeading>
      <p>
        Over the years we collected the best rocks humanity ever found. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Duis augue sem, aliquam sit amet felis vestibulum, pulvinar venenatis sem. Phasellus hendrerit,
        ligula vulputate dignissim pharetra, arcu ligula sollicitudin enim, a sagittis enim justo eget tellus. Integer
        blandit fringilla eros, ut viverra odio feugiat eget. Nam lobortis consequat mauris, sagittis facilisis odio
        vulputate nec. Praesent quam urna, lobortis ut sapien aliquet, faucibus cursus mauris. Integer posuere tincidunt
        nunc, ut vehicula turpis aliquet sit amet.
      </p>
      <p>
        Ut suscipit euismod dapibus. Morbi a aliquet ex, a pellentesque nibh. Ut ac aliquam orci, eget dictum ipsum.
        Praesent eu purus sit amet sem venenatis consectetur ultrices at mi. Duis sit amet erat ipsum. Praesent ut arcu
        ac magna feugiat fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. In interdum ex augue, congue pretium nulla rhoncus vitae.
      </p>
    </div>
  );
}
