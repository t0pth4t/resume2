---
title: "Using a Raspberry Pi to Block Ads and Serve DNS"
excerpt: "How to setup a Raspberry Pi to route DNS and block ads"
coverImage: "/assets/blog/twelve.webp"
date: "2023-01-05T05:35:07.322Z"
author:
    name: Me
    picture: "/assets/blog/authors/avatar.png"
ogImage:
    url: "/assets/blog/twelve.webp"
---

# Using a Raspberry Pi to Block Ads and Serve DNS

Setting up Pi-hole and Unbound on a Raspberry Pi and configuring your router to use it can be a great way to improve the privacy, security, and speed of your home network. This guide will walk you through the process of installing and configuring these tools on your Raspberry Pi.

First, you will need to install the Pi-hole software on your Raspberry Pi. You can find detailed instructions for this process on the Pi-hole website (<https://pi-hole.net>). Once you have Pi-hole installed, make sure to take note of the IP address of your Raspberry Pi.

Next, you will need to install the Unbound software on your Raspberry Pi. You can do this by using the following command:

```
sudo apt-get install unbound
```

Once Unbound is installed, you will need to configure it to use Pi-hole as its upstream DNS server. To do this, open the Unbound configuration file with the following command:

```
sudo nano /etc/unbound/unbound.conf
```

In the configuration file, find the "server:" section and add the following lines:

```
forward-zone:
    name: "."
    forward-addr: IP_ADDRESS_OF_PIHOLE
```

Make sure to replace "IP_ADDRESS_OF_PIHOLE" with the actual IP address of your Pi-hole device.

You may also want to enable the "DNSSEC" and "Cache" options in the Unbound configuration file to further improve the security and performance of your DNS setup.

Save the configuration file and restart the Unbound service with the following command:

```
sudo service unbound restart
```

Now that you have Pi-hole and Unbound set up on your Raspberry Pi, you will need to configure your router to use it as its DNS server. To do this, log in to the router's web interface and navigate to the "Network" or "Internet" settings. You should see an option to specify a DNS server. Enter the IP address of your Raspberry Pi here.

Save the changes to your router's settings and all devices connected to the router should now be using Pi-hole and Unbound for DNS resolution.

That's it! You should now have Pi-hole and Unbound working together to improve the privacy, security, and speed of your home network. If you have any issues or questions, don't hesitate to reach out to the Pi-hole or Unbound communities for help.
