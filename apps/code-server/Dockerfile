FROM codercom/code-server:4.96.4

USER root
RUN apt-get update \
    && apt-get install -y curl \
    && curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Revert to the code-server default user
USER coder
# Expose code-server's default port
EXPOSE 8080

RUN wget https://github.com/code100x/mobile-magic/raw/refs/heads/main/ext/bolty-listener-0.0.1.vsix
RUN code-server --install-extension bolty-listener-0.0.1.vsix

RUN git clone https://github.com/code100x/base-react-native-expo.git /tmp/bolty-worker
RUN cd /tmp/bolty-worker && npm install

# Start code-server on container launch
CMD ["code-server", "--auth", "none", "--bind-addr", "0.0.0.0:8080", "/tmp/bolty-worker"]