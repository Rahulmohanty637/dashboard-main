import React from 'react'

const WANConfigure = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <div className="container max-w-4xl bg-white shadow-md rounded p-6">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          </div>
        <div className="col-span-9">
          <h2 className="text-xl font-bold mb-4">WAN1 Interface Configure</h2>
          <form className="space-y-4">
            <div>
              <label className="block font-semibold">Internet Access</label>
              <div className="mt-2 space-x-4">
                <label>
                  <input type="radio" name="internet_access" value="adsl" /> ADSL/PPPoE
                </label>
                <label>
                  <input type="radio" name="internet_access" value="static_ip" /> Static IP
                </label>
                <label>
                  <input type="radio" name="internet_access" value="dhcp" /> DHCP
                </label>
              </div>
            </div>

            <div>
              <label className="block font-semibold">Specify DNS</label>
              <input type="checkbox" className="mt-1" />
            </div>

            <div>
              <label className="block font-semibold">Line Interruption Detection</label>
              <input type="checkbox" className="mt-1" />
            </div>

            <button type="button" className="text-blue-500 mt-2">Advanced Configuration</button>

            <div className="mt-4">
              <h3 className="font-bold">DHCP Obtaining Status</h3>
              <p className="text-green-500">Obtain IP success!</p>
            </div>

            <div>
              <label className="block font-semibold">IP Address</label>
              <p className="mt-1">192.168.1.243</p>
            </div>

            <div>
              <label className="block font-semibold">Netmask</label>
              <p className="mt-1">255.255.255.0</p>
            </div>

            <div>
              <label className="block font-semibold">Default Gateway</label>
              <p className="mt-1">192.168.1.1</p>
            </div>

            <div>
              <label className="block font-semibold">DNS Server</label>
              <p className="mt-1">192.168.1.1</p>
            </div>

            <div>
              <label className="block font-semibold">Smart QoS</label>
              <p className="mt-1">Enable</p>
            </div>

            <div>
              <label className="block font-semibold">Bandwidth Setting</label>
              <p className="mt-1">Upstream 100000 / Downstream 100000 KBps</p>
            </div>

            <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Save</button>
          </form>
        </div>
      </div>
    </div>
  </div>

  )
}

export default WANConfigure
