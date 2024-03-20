import React from 'react';

const StyledSocialNetworksBar = React.lazy(() => import('./style'));

const SocialNetworksBadge = React.lazy(
  () => import('@/components/SocialNetworksBadge')
);

function SocialNetworksBar() {
  const networks = [
    {
      src: '/badges/twitterbadge.svg',
      alt: 'Twitter',
    },
    {
      src: '/badges/facebookbadge.svg',
      alt: 'Facebook',
    },
    {
      src: '/badges/linkedinbadge.svg',
      alt: 'LinkedIn',
    },
    {
      src: '/badges/youtubebadge.svg',
      alt: 'YouTube',
    },
    {
      src: '/badges/instagrambadge.svg',
      alt: 'Instagram',
    },
    {
      src: '/badges/snapchatbadge.svg',
      alt: 'Snapchat',
    },
  ];

  return (
    <StyledSocialNetworksBar>
      {networks.map((network) => (
        <SocialNetworksBadge
          key={network.alt}
          src={network.src}
          alt={network.alt}
        ></SocialNetworksBadge>
      ))}
    </StyledSocialNetworksBar>
  );
}

export default SocialNetworksBar;
